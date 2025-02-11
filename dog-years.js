function dogYears(planet, ageInSec){

    let ans = 0.0
    const ratio = ageInSec / 31557600

    switch(planet){
        case "earth":
        ans = ratio * 1
            break
            
        case "mercury":
        ans = ratio * 0.2408467
            break
            
        case "venus":
        ans = ratio * 0.61519726
            break
        
        case "mars":
        ans = ratio * 1.8808158
            break
            
        case "jupiter":
        ans = ratio * 11.862615
            break
            
        case "saturn":
        ans = ratio * 29.447498
            break
            
            case "uranus":
        ans = ratio * 84.016846
            break
            
            case "neptune":
        ans = ratio * 164.79132
            break
    }

    return ans.toFixed(2)
}