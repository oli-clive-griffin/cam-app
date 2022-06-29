import axios from "axios";
import { FC, useCallback, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

export type InputScreenProps = {
  onChangeCover: (c: number) => void;
}

const InputScreen: FC<InputScreenProps> = ({ onChangeCover }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate()

  const handleSubmit = useCallback(async () => {
    setLoading(true)

    const formData = new FormData();
    if (file) formData.append("file", file, file.name)

    const { data: { cover } } = await axios.post('http://10.2.98.122:5000/image/submit', formData)
    console.log({cover})
    onChangeCover(cover)
    // axios.interceptors.request.use(request => {
    //   console.log('Starting Request', JSON.stringify(request, null, 2))
    //   return request
    // })

    setLoading(false)
    nav('/result')
  }, [file, nav, onChangeCover]);

  return (
    <header className="App-header">
      <input type="file" accept="image/*" capture="environment" onChange={(e) => setFile(e.target?.files?.[0] ?? null)} />
      <button style={{ height: 30 }} onClick={handleSubmit}>{loading ? 'loading...' : 'submit'}</button>
    </header>
  )
}

export default InputScreen
