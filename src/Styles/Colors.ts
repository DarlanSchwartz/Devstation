const LightColors = {
    background: 'white',
    white: '#242424',
    gray: 'gray',
};

export type Colors = typeof LightColors;

const DarkColors: Colors = {
    background: '#242424',
    white: 'white',
    gray: 'gray',
};

export { LightColors, DarkColors };