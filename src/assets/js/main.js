const fileInput = document.querySelector("#file-input");
const preview = document.querySelector("#preview");
const selectFilesButton = document.querySelector(".select-files");

React.useEffect(() => {
  selectFilesButton.addEventListener("click", () => {
    fileInput.click();
  });
});

const fileTypes = [];

function validFileType(file) {
  if (fileTypes.length > 0) {
    return fileTypes.includes(file.type);
  }
  return true;
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + "KB";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + "MB";
  }
}

function isFileImage(file) {
  const imageTest = ["img", "image"];
  return imageTest.some((imageType) => file.type.includes(imageType));
}

const updateFileList = () => {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = Array.from(fileInput.files);

  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);
    console.log(curFiles);
    curFiles.forEach((file, index) => {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.innerHTML = `<b>File Name:</b> ${file.name}`;
        para.id = "file-description";

        const fileSize = document.createElement("p");
        fileSize.id = "file-size";
        fileSize.innerHTML = `<b>File Size:</b> ${returnFileSize(file.size)}`;

        if (isFileImage(file)) {
          const image = document.createElement("img");
          image.src = URL.createObjectURL(file);
          image.width = 100;
          image.height = 100;

          listItem.appendChild(image);
        } else {
          const placeholderDiv = document.createElement("div");
          placeholderDiv.id = "placeholder-div";

          listItem.appendChild(placeholderDiv);
        }
        listItem.appendChild(para);

        listItem.appendChild(fileSize);

        const deleteButton = () => {
          const button = document.createElement("div");
          button.textContent = "X";
          button.classList.add("delete-button");

          button.addEventListener("click", () => {
            // button.parentElement.remove();

            const dt = new DataTransfer();
            const _curFiles = curFiles;
            _curFiles.splice(index, 1);
            _curFiles.forEach((file) => {
              dt.items.add(file);
            });
            fileInput.files = dt.files;
            updateFileList();
            console.log(fileInput.files);
          });

          return button;
        };

        listItem.appendChild(deleteButton());
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    });
  }
};

fileInput.addEventListener("change", updateFileList);

updateFileList();
