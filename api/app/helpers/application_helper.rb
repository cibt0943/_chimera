require 'open-uri'

module ApplicationHelper
  def stylesheet_pack_tag(name, **options)
    stylesheet_link_tag(asset_bundle_path("#{name}.css"), **options)
  end

  def javascript_pack_tag(name, **options)
    javascript_include_tag(asset_bundle_path("#{name}.js"), **options)
  end

  private

  def manifest
    return @manifest ||= JSON.parse(dev_manifest) if Rails.env.development?
    return @manifest ||= JSON.parse(pro_manifest) if Rails.env.production?
    # return @manifest ||= JSON.parse(test_manifest)
  end

  def pro_manifest
    JSON.parse(File.read("#{ENV['ASSET_DIR']}/manifest.json"))
  end

  def dev_manifest
    # webpack-dev-serverへアクセスして値を取得
    OpenURI.open_uri("http://frontend:#{ENV['ASSET_PORT']}/#{ENV['ASSET_DIR']}/manifest.json").read
  end

  def asset_bundle_path(name)
    manifest.fetch(name)
  end
end
