require 'open-uri'

module ApplicationHelper
  def stylesheet_pack_tag(name, **options)
    stylesheet_link_tag(asset_bundle_path("#{name}.css"), **options)
  end

  def javascript_pack_tag(name, **options)
    javascript_include_tag(asset_bundle_path("#{name}.js"), **options)
  end

  private

  def webpack
    @webpack ||= Rails.application.config.x.webpack.deep_symbolize_keys
  end

  def manifest
    @manifest ||= JSON.parse(File.read("#{webpack[:public_root_path]}/#{webpack[:output_path]}/manifest.json"))
  end

  def asset_bundle_path(name)
    manifest.fetch(name)
  end
end
