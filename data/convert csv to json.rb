# !/usr/bin/env ruby
# encoding: utf-8
Dir.chdir(File.dirname(__FILE__))

require "csv"
require 'json'
require "awesome_print"
require "digest/md5"

def readCSV (file)
  CSV.read("#{file}.csv", { encoding: "UTF-8", headers: true, col_sep: ";" }).map { |d| d.to_hash }
end

data = readCSV('41560_2018_179_MOESM2_ESM-1')

YEARS = [2015, 2020, 2025, 2030, 2035, 2040, 2045, 2050, 2055, 2060, 2065, 2070, 2075, 2080, 2085, 2090, 2095, 2100]

runs = data.map do |datum|
	# ap datum
	{
		key: Digest::MD5.hexdigest([datum['﻿Model'], datum['Region'], datum['Scenario'], datum['Variable'], datum['Unit']].join('')),
		model: datum['﻿Model'],
		region: datum['Region'],
		scenario: datum['Scenario'],
		variable: datum['Variable'],
		unit: datum['Unit'],
		years: YEARS.map { |year| [year, datum[year.to_s].sub(',', '.').to_f] }
	}
end

File.open('data.json', 'w') do |f|
  f.write(JSON.pretty_generate({ runs: runs }))
end