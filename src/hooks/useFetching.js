import { useState } from "react";

export const UseFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...params) => {
        try {
            setIsLoading(true);
            await callback(params);
        } catch (error) {
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, error]
}