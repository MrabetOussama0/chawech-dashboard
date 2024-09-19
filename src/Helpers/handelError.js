const handleError = (error) => {
    const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Une erreur s'est produite ! Veuillez réessayer !";
      throw Error(message);
}

export default handleError
