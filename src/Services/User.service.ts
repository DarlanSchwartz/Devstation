import AxiosProvider from "./Provider";
import { UsersResponseDTO } from "@/Protocols/User";

const UserRoutes = {
    getAll: '/persons'
};

export default class UserService {
    private static API: AxiosProvider = new AxiosProvider(import.meta.env.VITE_APP_API_URL);
    private static instance: UserService;

    constructor() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    public static async getAll() {
        return this.API.get<UsersResponseDTO>(UserRoutes.getAll);
    }
}

