import {loadtv} from "../reducers/tvSlice"
import {removetv} from "../reducers/tvSlice"
import axios from '../../utils/axios'

export const asyncloadtv=(id)=>async(dispatch,getState)=>{
    try {
        const detail=await axios.get(`/tv/${id}`)
        const externalId=await axios.get(`/tv/${id}/external_ids`)
        const recommendations=await axios.get(`/tv/${id}/recommendations`)
        const similar=await axios.get(`/tv/${id}/similar`)
        const translations=await axios.get(`/tv/${id}/translations`)
        const videos=await axios.get(`/tv/${id}/videos`)
        const watchproviders=await axios.get(`/tv/${id}/watch/providers`)
       
        let theultimatedata={
            detail:detail.data,
            externalid:externalId.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            translations:translations.data.translations.map((m)=>m.english_name),
            videos:videos.data.results.find((m)=>m.type==="Trailer"),
            watchproviders:watchproviders.data.results.IN,
        }
        dispatch(loadtv(theultimatedata))
        console.log(theultimatedata)
        
    } catch (error) {
        console.log("Error: ",error)
        
    }
}