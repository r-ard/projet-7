export default function ThemeComponent() {
    return (
        <style>
            {
                `
                    :root {
                        --secondary-color: ${process.env.REACT_APP_SECONDARY_COLOR};
                    }

                    * {
                        font-family: 'Montserrat', sans-serif;
                    }
                `
            }
        </style>
    );
};