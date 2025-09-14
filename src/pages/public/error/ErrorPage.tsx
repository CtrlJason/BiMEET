import { useNavigate } from "react-router";

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen justify-center items-center place-items-center bg-white">
            <div className="text-center">
                <p className="text-center text-9xl font-bold text-primary">
                    404
                </p>
                <h1 className="mt-4 font-semibold tracking-tight text-neutral-dark sm:text-2xl md:text-6xl">
                    Página no disponible
                </h1>
                <p className="mt-6 text-lg text-center font-medium text-pretty text-neutral-dark sm:text-lg md:text-2xl">
                    Esta pagina no existe o no se encuentra disponible
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button
                        onClick={() => navigate("/")}
                        className="cursor-pointer rounded-md bg-primary px-9 py-3 text-sm font-semibold text-white shadow-xs hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    );
}
