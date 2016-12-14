#
# CreateEnvVars.ps1
#

# Set to use local emulator -- default uri/key
$documentdb_uri = "https://localhost:8081"
$documentdb_key = "C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=="


[Environment]::SetEnvironmentVariable("documentdb_uri", $documentdb_uri, "Process")
[Environment]::SetEnvironmentVariable("documentdb_key", $documentdb_key, "Process")

& node server

# Delete ENV VAR if needed
# [Environment]::SetEnvironmentVariable("TestVariable", $null, "User")