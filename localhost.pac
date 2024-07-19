function FindProxyForURL(url, host) {
  if (url.startsWith("http:") || url.startsWith("https:"))
    return "PROXY localhost:3024; DIRECT";
  else
    return "DIRECT";
}
