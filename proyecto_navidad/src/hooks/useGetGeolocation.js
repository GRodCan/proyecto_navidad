export default function useGetGeolocation(info) {
    let hasGeolocations= info.filter((object)=>object.geolocation)
    let geolocations= hasGeolocations.map((object)=>Object.values(object.geolocation))
    return geolocations
  }