import {loadmovie} from "../reducers/movieSlice"
import {removemovie} from "../reducers/movieSlice"
import axios from '../../utils/axios'

export const asyncloadmovie=(id)=>async(dispatch,getState)=>{
    try {
        const detail=await axios.get(`/movie/${id}`)
        const externalId=await axios.get(`/movie/${id}/external_ids`)
        const recommendations=await axios.get(`/movie/${id}/recommendations`)
        const similar=await axios.get(`/movie/${id}/similar`)
        const translations=await axios.get(`/movie/${id}/translations`)
        const videos=await axios.get(`/movie/${id}/videos`)
        const watchproviders=await axios.get(`/movie/${id}/watch/providers`)
       
        let theultimatedata={
            detail:detail.data,
            externalid:externalId.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            translations:translations.data.translations.map((m)=>m.english_name),
            videos:videos.data.results.find((m)=>m.type==="Trailer"),
            watchproviders:watchproviders.data.results.IN,
        }
        dispatch(loadmovie(theultimatedata))
        console.log(theultimatedata)
        
    } catch (error) {
        console.log("Error: ",error)
        
    }
}