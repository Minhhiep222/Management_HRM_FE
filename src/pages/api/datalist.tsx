import axios from "axios";
import React, { memo, useEffect, useState } from "react";

function DataList() {

    const [employees, setEmployees] = useState<any[]>([]);
    const [teams, setTeams] = useState<any[]>([]);
    const [brands, setBrand] = useState<any[]>([]);
    const [rooms, setRoom] = useState<any[]>([]);
    const [managers, setManager] = useState<any[]>([]);
    const [employee, setEmployee] = useState<any[]>([]);
    const [customers, setCustomer] = useState<any[]>([]);

    const handleGetUser = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/employees/list");
            setEmployees(result.data.employees);
        } catch (e) {
            console.log("Something wrong");
        }
    };

    const handleGetTeams = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/teams/list");
            setTeams(result.data.teams);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const handleGetBrand = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/brands/list");
            setBrand(result.data.brands);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const handleGetRoom = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/departments/list");
            setRoom(result.data.departments);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const handleGetManager = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/managers/list");
            setManager(result.data.managers);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const handleGetCustomer = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/customers/list");
            setCustomer(result.data.customers);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    const handleGetUserByID = async (id: any) => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/employees/" + id);
            setEmployee(result.data.employee);
        } catch (e) {
            console.log("Something wrong !");
        }
    }

    return {
        employees, handleGetUser,
        employee, handleGetUserByID,
        teams, handleGetTeams,
        brands, handleGetBrand,
        rooms, handleGetRoom,
        managers, handleGetManager,
        customers, handleGetCustomer
    }
}

export default DataList;