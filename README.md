
### Description:
The problem was simple, I wanted a JSON file with a list of the best rated movies on IMDB. I found a txt file with a list of 250 best imdb movies, the problem was there was some fields that I didn't need it. So first I had to clean up the top250.txt with the info that I needed and then transform/parse it to a JSON format. Using Node and Stream libraries I was able to extract the information I needed from the txt file and write another txt file with only the title of the movie and the year it was released, then write another script to copy txt and create a json file. The end result is imdb.json.
The json validates with JSONLint.

#### How to use
This is a very specific example of how to use libraries like fs and event-stream with Regex to normalize and transform chunks of data. This little script will only work with the example file provided, but I believe it can be easily change/configure to work with other files.



```
npm install
npm run format <file path> to normalize top250.txt
npm run jsonfy <file path> to parse imdb.txt to imdb.json
```
