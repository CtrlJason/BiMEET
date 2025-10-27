import { useState, type ChangeEvent, type FormEvent } from "react";
import type { FormProps } from "../../../shared/types/auth/auth.ds";

const Login = () => {
    const [form, setForm] = useState<FormProps>({
        name: "",
        email: "",
        password: "",
    });

    const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const sendForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form);
    };

    return (
        <div>
            <form
                onSubmit={sendForm}
                className="flex flex-col gap-4 bg-green-500 rounded-3xl w-[400px] p-5"
            >
                <div className="flex flex-col">
                    <label
                        className="text-2xl font-semibold text-white"
                        htmlFor="name"
                    >
                        Nombre Completo
                    </label>
                    <input
                        className="rounded-2xl bg-white p-4 text-md"
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleForm}
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-2xl font-semibold text-white"
                        htmlFor="email"
                    >
                        Correo
                    </label>
                    <input
                        className="rounded-2xl bg-white p-4 text-md"
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleForm}
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-2xl font-semibold text-white"
                        htmlFor="password"
                    >
                        Contraseña
                    </label>
                    <input
                        className="rounded-2xl bg-white p-4 text-md"
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleForm}
                    />
                </div>
                <button
                    className="w-fit p-2 rounded-3xl bg-white"
                    type="submit"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Login;
