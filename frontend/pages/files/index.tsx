import { VFC } from 'react'
import { Main as Layout } from 'common/components/templates/Main'
import { Header } from 'common/components/organisms/Header'

export const Files: VFC = () => {
  return (
    <Layout>
      <Header>
        <h3 className="tw-ml-6 tw-text-xl tw-font-semibold">File</h3>
      </Header>
      <div className="tw-container tw-px-6 tw-py-3">
        <div className="tw-mb-5 tw-text-error tw-text-xl">This feature is currently under development</div>
        <div>ローカルファイル用のファイラーを作りたい</div>
        <ul className="tw-list-disc tw-list-inside">
          <li>nexeかelectronでパッケージ化したexeを配布してここからは起動だけできるようにしたいな</li>
          <li>例：Cloud Commander</li>
          <li>unixコマンドでの操作と</li>
          <li>windowのショートカット、クリックによる移動やdeleteキーによる削除などwindowsライクな操作の両方</li>
        </ul>
      </div>
    </Layout>
  )
}
