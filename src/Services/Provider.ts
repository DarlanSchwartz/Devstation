import Toaster from '@/Utils/Notifications';
import { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';

export default class AxiosProvider {
    public readonly provider;
    public readonly token;
    public readonly baseURL;
    public debug: boolean;
    onError: (error: AxiosError) => void;
    constructor(baseURL: string, onError?: (error: AxiosError) => void, token?: string | null) {
        this.provider = axios.create({
            baseURL: baseURL,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
            timeoutErrorMessage: 'Request timeout',
            timeout: import.meta.env.VITE_APP_API_TIMEOUT,
        });
        this.baseURL = baseURL;
        this.token = `Bearer ${token}`;
        this.provider.defaults.headers.common['Authorization'] = this.token;
        this.onError = onError ?? this.onErrorHandler;
        this.debug = import.meta.env.MODE === 'development';
    }

    private onErrorHandler(error: AxiosError) {
        Toaster.notify(error.message, 'error');
    }

    public async post<T = unknown>(path: string, data: T, params?: AxiosRequestConfig) {
        try {
            const response = await this.provider.post<T>(path, data, params);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                this.onError(error);
            }
        }
    }

    public async put<T = unknown>(path: string, data: T, params?: AxiosRequestConfig) {
        try {
            const response = await this.provider.put<T>(path, data, params);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                this.onError(error);
            }
        }
    }

    public async get<T = unknown>(path: string, params?: AxiosRequestConfig) {
        try {
            const response = await this.provider.get<T>(path, params);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                this.onError(error);
            }
        }
    }

    public async delete<T = unknown>(path: string, params?: AxiosRequestConfig) {
        try {
            const response = await this.provider.delete<T>(path, params);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                this.onError(error);
            }
        }
    }
}