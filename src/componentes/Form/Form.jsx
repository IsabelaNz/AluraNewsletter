

import React from "react";

const Form = ({ onSubmit }) => {
    const safeSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const name = event.target[0].value;
        const email = event.target[1].value;
        onSubmit({ name, email });
    };

    return (
        <form onSubmit={safeSubmit} className=" h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
            <input type="text" className="alura-input " required placeholder="Insira seu nome..." />
            <input type="email"className="alura-input" required placeholder="Insira seu e-mail..." />
            <button type="submit" className="py-1 px-5 w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase outline-none hover:animate-pulse hover:shadow-md hover:shadow-gray-500 hover:dark:shadow-black ">Seguir</button>
        </form>
    );
};

export default Form;