import {loadperson} from "../reducers/personSlice"
import {removeperson} from "../reducers/personSlice"
import axios from '../../utils/axios'

export const asyncloadperson=(id)=>async(dispatch,getState)=>{
    try {
        const detail=await axios.get(`/person/${id}`)
        const externalId=await axios.get(`/person/${id}/external_ids`)
        const combinedCredits=await axios.get(`/person/${id}/combined_credits`)
        const tvCredits=await axios.get(`/person/${id}/tv_credits`)
        const movieCredirs=await axios.get(`/person/${id}/movie_credits`)
        
       
        let theultimatedata={
            detail:detail.data,
            externalid:externalId.data,
            combinedCredits:combinedCredits.data,
            tvCredits:tvCredits.data,
            movieCredits:movieCredirs.data
           
        }
        dispatch(loadperson(theultimatedata))
        console.log(theultimatedata)
        
    } catch (error) {
        console.log("Error: ",error)
        
    }
}