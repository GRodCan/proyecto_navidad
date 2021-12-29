export default function useDate(days) {
  const tenDays= new Date()
  if(days){
    tenDays.setDate(tenDays.getDate() - days);
  }
  
  
  const date= tenDays.toLocaleDateString().split("/")
  
  
  
  return date.reverse().join("-");
}