import { FC } from "react";

export type ResultScreenProps = {
  cover: number | null;
}

const ResultScreen: FC<ResultScreenProps> = ({ cover }) => {
  if (!cover) throw new Error('cannot render result without cover')

  return (
    <header className="App-header">
      <p>cover is {cover.toFixed()}</p>
    </header>
  )
}

export default ResultScreen
