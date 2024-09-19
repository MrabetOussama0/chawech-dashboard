import { ControlPoint } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import AddSuccessPopUp from "Components/AddSuccessPopUp";
import Builder from "Components/Builder";
import DeletePopUp from "Components/DeletePopUp";
import ErrorScreen from "Components/ErrorScreen";
import LoadingOverlay from "Components/LoadingOverlay";
import PopUp from "Components/Popup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "States/Actions/CategoriesActions";

function AddEditCategory({ handleSubmit, category }) {
  const [name, setName] = useState(category?.name);
  const [image, setImage] = useState(null);

  return (
    <Box
      sx={{
        width: "500px",
      }}
    >
      <Typography variant="h5" fontWeight={"bold"} color="primary">
        {category ? "Modifier la catégorie" : "Ajouter une catégorie"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          bgcolor: "#fff",
          borderRadius: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h6" fontWeight={"bold"} color="secondary">
            Nom de la catégorie
          </Typography>
          <TextField
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              width: "100%",
              backgroundColor: "#fff",
              borderColor: "black",
              border: "none",
              height: "40px",
              borderBottom: "2px solid #D9D9D9",
            }}
            InputProps={{
              id: "name",
              style: {
                color: "#000",
                fontSize: "14px",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h6" fontWeight={"bold"} color="secondary">
            Image de la catégorie
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Builder
              builder={() => {
                if (image) {
                  return (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="category"
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "6px",
                      }}
                    />
                  );
                } else if (category) {
                  return (
                    <img
                      src={process.env.REACT_APP_UPLOAD_URL + category.image}
                      alt="category"
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "6px",
                      }}
                    />
                  );
                } else {
                  return (
                    <img
                      src="https://via.placeholder.com/150"
                      alt="category"
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "6px",
                      }}
                    />
                  );
                }
              }}
            />
            <input
              name="image"
              type="file"
              accept="image/*"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              style={{
                display: "none",
              }}
            />
            <Button
              component="label"
              htmlFor="image"
              sx={{
                width: "100%",
                bgcolor: "#fff",
                color: "#1E5EFF",
                borderRadius: "6px",
                padding: "10px",
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "none",
                border: "2px solid #1E5EFF",
                textWrap: "nowrap",
              }}
            >
              Choisir une image
            </Button>
          </Box>
        </Box>
        <Button
          sx={{
            bgcolor: "#1E5EFF",
            color: "#fff",
            borderRadius: "6px",
            padding: "10px",
            fontSize: "14px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={() => handleSubmit({ name, image })}
        >
          {category ? "Modifier" : "Ajouter"}
        </Button>
      </Box>
    </Box>
  );
}

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [addEditOpen, setAddEditOpen] = useState(false);
  const [addSuccessOpen, setAddSuccessPopUp] = useState(false);
  const [updateSuccessOpen, setUpdateSuccessOpen] = useState(false);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false);
  const {
    categories,
    error,
    addCategoryLoading,
    udpateCategoryLoading,
    deleteCategoryLoading,
  } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getCategories());
    } catch (error) {
      toast.error(error.message);
    }
  }, [dispatch]);
  const handleSubmit = async (category) => {
    try {
      if (selectedCategory) {
        await dispatch(updateCategory(selectedCategory._id, category));
        setUpdateSuccessOpen(true);
      } else {
        await dispatch(addCategory(category));
        setAddSuccessPopUp(true);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleDeleteCategory = async () => {
    try {
      await dispatch(deleteCategory(selectedCategory._id));
      setDeleteOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <Box
      sx={{
        height: "500px",
      }}
    >
      <Builder
        builder={() => {
          if (categories) {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  padding: "20px",
                  height: "470px",
                  mb: "20px",
                  borderColor: "#fff",
                  border: "1.5px solid #fff",
                  borderRadius: "4px",
                  overflow: "auto",
                }}
              >
                {/* Categories */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Typography variant="h5" fontWeight={"bold"} color="primary">
                    Catégories
                  </Typography>
                  <IconButton
                    onClick={() => {
                      setSelectedCategory(null);
                      setAddEditOpen(true);
                    }}
                  >
                    <ControlPoint />
                  </IconButton>
                </Box>
                <Builder
                  builder={() => {
                    if (categories.length === 0) {
                      return <ErrorScreen text="Aucune catégorie trouvée" />;
                    } else {
                      return (
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px",
                            borderColor: "#fff",
                          }}
                        >
                          {categories.map((category) => (
                            <Box
                              key={category._id}
                              sx={{
                                height: "200px",
                                bgcolor: "#fff",
                                padding: "10px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "start",
                                gap: "10px",
                                borderRadius: "16px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                              }}
                            >
                              <Box
                                sx={{
                                  backgroundImage: `url(${
                                    process.env.REACT_APP_UPLOAD_URL +
                                    category.image
                                  })`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  height: "100%",
                                  width: "100%",
                                  borderRadius: "16px",
                                }}
                              />
                              <Typography
                                variant="h6"
                                fontWeight={"bold"}
                                color="secondary"
                              >
                                {category.name}
                              </Typography>
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  gap: "10px",
                                }}
                              >
                                <Button
                                  sx={{
                                    flex: "1",
                                    bgcolor: "#1E5EFF",
                                    color: "#fff",
                                    borderRadius: "6px",
                                    padding: "5px 20px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                  }}
                                  onClick={() => {
                                    setSelectedCategory(category);
                                    setAddEditOpen(true);
                                  }}
                                >
                                  Modifier
                                </Button>
                                <Button
                                  sx={{
                                    flex: "1",
                                    bgcolor: "#FF4A4A",
                                    color: "#fff",
                                    borderRadius: "6px",
                                    padding: "5px 20px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                  }}
                                  onClick={() => {
                                    setSelectedCategory(category);
                                    setDeleteOpen(true);
                                  }}
                                >
                                  Supprimer
                                </Button>
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      );
                    }
                  }}
                />
              </Box>
            );
          } else if (error) {
            return <ErrorScreen text={error} />;
          } else {
            return (
              <Skeleton
                animation="pulse"
                variant="rectangular"
                sx={{
                  bgcolor: "#D9D9D9",
                  borderRadius: "6px",
                  height: "80px",
                }}
              />
            );
          }
        }}
      />
      <PopUp
        open={addEditOpen}
        setOpen={setAddEditOpen}
        style={{ backgroundColor: "white" }}
      >
        <AddEditCategory
          category={selectedCategory}
          handleSubmit={handleSubmit}
        />
      </PopUp>
      <DeletePopUp
        content={`Voulez-vous vraiment supprimer la catégorie ${selectedCategory?.name}`}
        title={"Supprimer la catégorie"}
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onClick={handleDeleteCategory}
      />
      <PopUp open={addSuccessOpen} setOpen={setAddSuccessPopUp}>
        <AddSuccessPopUp
          title={"Catégorie ajoutée avec succès"}
          onClick={() => {
            setAddSuccessPopUp(false);
            setAddEditOpen(false);
          }}
        />
      </PopUp>
      <PopUp open={updateSuccessOpen} setOpen={setUpdateSuccessOpen}>
        <AddSuccessPopUp
          title={"Catégorie modifiée avec succès"}
          onClick={() => {
            setUpdateSuccessOpen(false);
            setAddEditOpen(false);
          }}
        />
      </PopUp>
      <PopUp open={deleteSuccessOpen} setOpen={setDeleteSuccessOpen}>
        <AddSuccessPopUp
          title={"Catégorie supprimée avec succès"}
          onClick={() => setDeleteOpen(false)}
        />
      </PopUp>
      <LoadingOverlay
        open={
          addCategoryLoading || udpateCategoryLoading || deleteCategoryLoading
        }
      />
    </Box>
  );
}

export default Categories;
