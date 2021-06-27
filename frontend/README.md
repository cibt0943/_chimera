# ディレクトリ構成の方針

commonにはpageを超えて利用するものを配置
最初はpage内に置いていたがpageを超えて利用するようになった際はcommonに移動

## common内のディレクトリについて

### components

- atoms
  - 汎用的な機能を提供する。
  - ドメインが入ってはいけない。
  - Contextへのアクセスはしない。
  - 他のコンポーネントに依存していない。

- molecules
  - 汎用的な機能を提供する。
  - ドメインが入ってはいけない。
  - Contextへのアクセスはしない。
  - 他のAtomsやMoleculesのコンポーネントに依存している。

- organisms
  - ドメインが入ったらorganisms。
  - 他に依存するコンポーネントがなかったとしても、ドメインが入った時点でorganismsにする。
  - pagesの下にあったけどpageを超えるようになった際はここに移動
  - Contextへのアクセスはしない。

- templates
  - 画面全体のレイアウト。
  - ロジックは持たない。


### utils

汎用メソッド群


# containerの粒度と状態管理

