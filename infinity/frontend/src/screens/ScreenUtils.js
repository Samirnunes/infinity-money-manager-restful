export const handleChange = (field, value, data, setData) => {
    setData({
        ...data,
        [field]: value,
    });
};
