export const config = {
    HOST: "postgres",
    USER: "postgres",
    PASSWORD: "postgres",
    DB: "testing",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export const dialect = "postgres";
