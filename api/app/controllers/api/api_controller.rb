# frozen_string_literal: true

module Api
  class ApiController < ApplicationController
    before_action :snake_case_params

    private

    def snake_case_params
      request.parameters.deep_transform_keys!(&:underscore)
    end
  end
end
