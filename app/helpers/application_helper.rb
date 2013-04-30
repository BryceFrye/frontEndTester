module ApplicationHelper
  def replace_placeholders(text)
    text = text.gsub(/\$NEWLINE\$/, '')
    text = text.gsub(/\$DQUOTE\$/, '"')
    text = text.gsub(/\$SQUOTE\$/, "'")
    text = text.gsub(/\$HASH\$/, '#')
    text = text.gsub(/\$PERCENT\$/, '%')
    text = text.gsub(/\$FSLASH\$/, '/')
  end
end
