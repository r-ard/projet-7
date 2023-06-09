export default function ThemeComponent() {
    return (
        <style>
            {
                `
                    :root {
                        --primary-color: ${process.env.REACT_APP_PRIMARY_COLOR};
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