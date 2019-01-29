const SnackbarContext = React.createContext({
  // eslint-disable-next-line
  showSnackbar: (args) => {},
});

export default function withSnackbar(
  WrappedComponent,
) {
  const ConnectedSnackbar = (props) => {
    return (
      <SnackbarContext.Consumer>
        {({ showSnackbar }) => <WrappedComponent {...props} showSnackbar={showSnackbar} />}
      </SnackbarContext.Consumer>
    );
  };

  return ConnectedSnackbar;
};
