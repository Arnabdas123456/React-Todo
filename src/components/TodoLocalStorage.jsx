const todoKey = "reactTodo";

export const getLocalStorage = () => {
    const rawData = localStorage.getItem(todoKey);
    if (!rawData) return [];
    return JSON.parse(rawData);
};

export const setLocalStorage = (storeValue) => {
    return localStorage.setItem(todoKey, JSON.stringify(storeValue));
};