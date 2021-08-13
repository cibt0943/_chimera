import { VFC } from 'react'
import Layout from 'common/components/templates/Main'
import Header from 'common/components/organisms/Header'

const Files: VFC = () => {
  return (
    <Layout>
      <Header>
        <h3 className="tw-ml-6 tw-text-xl tw-font-semibold">File</h3>
      </Header>
      <div className="tw-container tw-px-6 tw-py-3">
        <div className="tw-mb-5 tw-text-error tw-text-xl">This feature is currently under development</div>
        <div>ローカルファイル用のファイラーを作りたい</div>
        <ul className="tw-list-disc tw-list-inside">
          <li>ブラウザプラグインかelectronしか無理かな</li>
          <li>unixコマンドでの操作</li>
          <li>クリックによる移動やdeleteキーによる削除などwindowsライクな操作</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Files
