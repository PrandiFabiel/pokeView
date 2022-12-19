export interface IDominantColor {
    status:     string;
    request:    Request;
    sharpness:  number;
    contrast:   number;
    brightness: number;
    colors:     Colors;
    media:      Media;
}

export interface Colors {
    dominant: Dominant;
    accent:   Dominant[];
    other:    Dominant[];
}

export interface Dominant {
    r:   number;
    g:   number;
    b:   number;
    hex: string;
}

export interface Media {
    id:  string;
    uri: string;
}

export interface Request {
    id:         string;
    timestamp:  number;
    operations: number;
}