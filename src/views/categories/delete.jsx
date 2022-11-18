import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";

export default function DeleteCategory({ id }) {
    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, "Category", id));
            toast.success("Category deleted successfully", {});
        } catch (error) {
            toast.error("Error deleting category", {});
            console.log(error);
        }
    };
    return (
        <>
            <button onClick={handleDelete} data-bs-dismiss="modal" class="btn btn-sm btn-red">Delete</button>
        </>
    );
}

