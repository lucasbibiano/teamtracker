parseCommitUrl = function(url){
  var changes = JSON.parse(httpGet(getCommitApiUrl(url)))["files"];

  var changedFiles = "";

  for (var i = 0; i < changes.length; i++) {
    changedFiles += formatCommitText(changes[i]);
  }
  return changedFiles;
}

getRelevantLines = function(patch){
  return patch.split("@@")[2];
}

formatCommitText = function(change){
  lang = "diff";
  // lang = getLanguage(change["blob_url"])

  return codefyText(getRelevantLines(change["patch"])+ "\n");
}
