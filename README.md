angularAMD-sample
=================

Sample App created using angularAMD

## Development
To setup and run this project, do the following:

```
bash setup.sh
grunt devel
```

## optimised Using r.js
To create an `r.js` optimised version of the code in under the `build` directory.  Note that JS script at this stage is
left in the un-minimized state.  This will allow further testing making sure that optimised code is done correctly and
works.

```
grunt build
```

## Deploy
To create a final version to be deployed.  The code will be source from the `build` directory and only the needed
files are copied and minified to the `dist` directory.

```
grunt deploy
```

