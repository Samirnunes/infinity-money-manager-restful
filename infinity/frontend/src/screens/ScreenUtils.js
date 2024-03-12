export const handleInsertChange = (field, value, setInsertData, insertData) => {
    setInsertData({
        ...insertData,
        [field]: value,
    });
};

export const handleDeleteChange = (field, value, setDeleteData, deleteData) => {
    setDeleteData({
        ...deleteData,
        [field]: value,
    });
}
