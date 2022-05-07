class DateValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    value = record.send("#{attribute}_before_type_cast")
    begin
      Time.zone.parse(value.to_s) if value.present?
    rescue
      record.errors.add(attribute, I18n.t('errors.messages.invalid'))
    end
  end
end
