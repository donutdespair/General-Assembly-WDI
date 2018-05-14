require 'sinatra'
require 'byebug'
require 'JSON'

post '/' do
  choices = [/^email/, /^id/, /^total_price$/, /^line_item/]
  re = Regexp.union(choices)
  puts 'someone hit my route'
  data = JSON.parse(request.body.read)
  choices = data.select { |key, value| key.match(re)}
  puts choices
end
