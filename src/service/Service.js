import axios from 'axios'

export default class Service {
    constructor() {
        this._service = axios.create({
            baseURL: 'https://api-pre.mirai.com/MiraiWebService/availableRate/get',
            withCredentials: false,
            auth: {
                username: 'user1',
                password: 'user1Pass'
            }
        })
    }

    getRoomRate = (hotelId, checkin, nights) => this._service.get(`?hotelId=${hotelId}&checkin=${checkin}&nights=${nights}`)
}