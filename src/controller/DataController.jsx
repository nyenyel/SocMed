import React, { useEffect, useState } from 'react'


export function AddData(data, newData) {
    return [...data, newData]
}

export function RemoveData(data, id) { 
    console.log(data)
    return data.filter(item => item.id !== id)
}

export function UpdateData(data, id, update) {
    return data.map(item => item.id === id ? {...item, ...update} : item)
}

export function GetData(data, id) {
    return data.find(item => item.id === id) || null
}