export function fetchData(callback1, callback2, count = 100) {
    return async () => {
        try {
            const res  = await callback1();
            if (!res) {
                console.log("res is null")
            }
        } catch(err) {
            console.error("Failed to fetch data:", err);
        } finally {
            return callback2(count)
        }
    }
}