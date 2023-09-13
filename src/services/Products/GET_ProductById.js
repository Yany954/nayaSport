import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { base_API } from '../configAPI';

function GET_ProductById({ id }) {

    const request_URL = `${base_API.api}/productos/${id}`;

    const options = {
        method: 'GET',
        url: request_URL,
    };

    return axios.request(options)

}

export default GET_ProductById;