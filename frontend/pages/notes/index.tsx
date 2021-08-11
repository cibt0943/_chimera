import { VFC } from 'react'
import Layout from 'common/components/templates/Main'
import Header from 'common/components/organisms/Header'

const Notes: VFC = () => {
  return (
    <Layout>
      <Header>
        <h3 className="tw-ml-6 tw-text-xl tw-font-semibold">Note</h3>
      </Header>
      <div className="tw-container tw-mx-auto tw-px-6 tw-py-3">
        <div className="tw-mb-5 tw-text-warning tw-text-xl">This feature is currently under development</div>
        <div>さっと書けるメモ帳</div>
        <ul className="tw-list-disc tw-list-inside">
          <li>リアルタイムに保存</li>
          <li>階層構造を持ったタブによるフィルタリング</li>
          <li>日付等によるソート</li>
          <li>1行目がタイトル</li>
          <li>タイトルなくても良い</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Notes
