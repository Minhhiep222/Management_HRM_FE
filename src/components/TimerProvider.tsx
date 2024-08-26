import React, { createContext, useState, useEffect, useRef, ReactNode } from 'react';

interface TimerContextType {
    seconds: number;
    minutes: number;
    hours: number;
    handleReset: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

interface TimerProviderProps {
    children: ReactNode;
}

export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const timerID = useRef<number | null>(null);
    const end = 17;

    const handleCountingTime = (check: boolean, idWork: any) => {
        //lấy ngày tháng hiện tại
        const date = new Date(Date.now());

        const end = 17;

        if (check) {
            if (timerID.current === null) {
                timerID.current = window.setInterval(() => {
                    setSecond(prevSecond => {
                        const newSecond = prevSecond + 1;
                        if (newSecond === 60) {
                            setMinute(prevMinute => {
                                const newMinute = prevMinute + 1;
                                if (newMinute === 60) {
                                    setHour(prevHour => prevHour + 1)
                                    return 0;
                                }
                                return newMinute;
                            });
                            return 0;
                        }
                        if (date.getHours() === end) {
                            handleCheckOut();
                            handleReset();
                            setHour(0), setMinute(0), setSecond(0);
                            return 0;
                        }
                        return newSecond;
                    });
                }, 1000);
                console.log("Interval started");
            }
        } else {
            handleReset();
        }
    }

    //hàm xử lý khi người dùng quên checkout
    const handleReset = () => {
        if (timerID.current !== null) {
            clearInterval(timerID.current);
            timerID.current = null;
            console.log("Interval cleared");
        }
    }

    const handleCheckIn = async () => {
        //xử lý lấy ngày tháng hiện tại
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const start = `${year}-${month}-${day}`;

        const newObj = {
            employeeID: 1,
            start_date: start,
            end_date: start,
            hour_work: hour
        }

        try {
            if (!checkCreate) {
                const result = await axios.post("http://127.0.0.1:8000/api/workdailies", newObj);
                setId(result.data.id)
                if (result.status == 200) {
                    handleCountingTime(true, id);
                    setCheckCreate(true)
                    console.log("thêm thành công")
                    checkInref.current?.classList.remove(styles["btn__active"]);
                    checkOutRef.current?.classList.add(styles["btn__active"]);
                }
            } else {
                handleCountingTime(true, id);
                checkInref.current?.classList.remove(styles["btn__active"]);
                checkOutRef.current?.classList.add(styles["btn__active"]);
            }
        } catch (e) {
            console.log("something wrong" + e)
        }
    }

    const handleCheckOut = async () => {
        //xử lý ngày tháng
        const date = new Date(Date.now());
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const start = `${year}-${month}-${day}`;

        const newObj = {
            employeeID: 1,
            start_date: start,
            end_date: start,
            hour_work: hour + 1,
        }

        try {
            if (id === undefined) {
                console.log("something wrong")
            } else {
                const result = await axios.put("http://127.0.0.1:8000/api/workdailies/" + id + "/" + newObj.start_date, newObj);
                if (result.status == 200) {
                    handleCountingTime(false, id);
                    checkOutRef.current?.classList.remove(styles["btn__active"]);
                    checkInref.current?.classList.add(styles["btn__active"]);
                    console.log("sửa thành công")
                }
            }
        } catch (e) {
            console.log("something wrong" + e)
        }
    }

    useEffect(() => {
        const savedTime = JSON.parse(localStorage.getItem('timer') || '{"seconds": 0, "minutes": 0, "hours": 0}');
        setSeconds(savedTime.seconds);
        setMinutes(savedTime.minutes);
        setHours(savedTime.hours);

        if (timerID.current === null) {
            timerID.current = window.setInterval(() => {
                setSeconds(prevSeconds => {
                    const newSeconds = prevSeconds + 1;
                    if (newSeconds === 60) {
                        setMinutes(prevMinutes => {
                            const newMinutes = prevMinutes + 1;
                            if (newMinutes === 60) {
                                setHours(prevHours => prevHours + 1);
                                return 0;
                            }
                            return newMinutes;
                        });
                        return 0;
                    }
                    const date = new Date(Date.now());
                    if (date.getHours() === end) {
                        handleReset();
                        return 0;
                    }
                    return newSeconds;
                });

                localStorage.setItem('timer', JSON.stringify({ seconds, minutes, hours }));
            }, 1000);
        }

        return () => {
            if (timerID.current !== null) {
                clearInterval(timerID.current);
                timerID.current = null;
            }
        };
    }, [seconds, minutes, hours]);

    const handleReset = () => {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        localStorage.removeItem('timer');
    };

    return (
        <TimerContext.Provider value={{ seconds, minutes, hours, handleReset }}>
            {children}
        </TimerContext.Provider>
    );
};

export const useTimer = (): TimerContextType => {
    const context = React.useContext(TimerContext);
    if (!context) {
        throw new Error('useTimer must be used within a TimerProvider');
    }
    return context;
};


