// used to check the status of city and main station
export default function Checkbox({name,value,onChange,labelName="",customStyle,IsChecked}){
    return(
    <label className="flex gap-3 items-center cursor-pointer ">
    <input
      type="checkbox"
    name={name}
      id={name}
      value={value}
      onChange={(e)=>onChange(name,e.target.checked)}
      className="sr-only peer"
      checked={IsChecked}
    />
    <div className={`size-7 rounded border-2 border-red-200 bg-red-400 peer-checked:bg-green-600 peer-checked:border-green-600 peer-checked:[&::after]:block relative transition-all duration-200 ease-in ${customStyle}`}>
      {/* <div className=""></div> */}
    </div>
    <span className="empty:hidden">{labelName}</span>
  </label>
    )
}