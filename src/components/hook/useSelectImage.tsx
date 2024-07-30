import { useCallback, useEffect, useState } from "react";

function useSelecImage(object: any) {

    const [img, setImg] = useState<string>('/images/space.jpg');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

    useEffect(() => {
        return () => {
            if (!selectedFile)
                selectedFile && URL.revokeObjectURL(selectedFile);
        }
    }, []);

    const handleSelectImg = useCallback(() => {
        if (object.current) {
            object.current.click();
            object.current?.addEventListener("change", () => {
                if (object.current?.files && object.current.files.length > 0) {
                    const file: any = object.current.files[0]
                    file.preview = URL.createObjectURL(file)
                    setImg(file.preview);
                    setSelectedFile(file);
                }
            });
        }
    }, []);

    const handleUpload = async () => {
        try {
            if (!selectedFile) {
                alert('please select a file first');
                return;
            }

            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setUploadedFileName(selectedFile.name);
                alert('File uploaded successfully');
            } else {
                alert('File upload failed');
                console.log(response)
            }
        } catch (e) {
            console.log(e);
        }

    }



    const handleDelete = async () => {
        if (!uploadedFileName) {
            alert('No file to delete!');
            return;
        }

        const response = await fetch('/api/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fileName: uploadedFileName }),
        });

        if (response.ok) {
            setUploadedFileName(null);
            alert('File deleted successfully');
        } else {
            alert('File deletion failed');
        }
    };

    return { img, handleSelectImg, handleUpload, handleDelete, selectedFile }
}

export default useSelecImage;