/**
 * Creates a directory or throws an error if the directory already exists.
 * @param {string} directory - The name of the directory to create.
 * @throws {Error} Throws an error if the directory already exists.
 */
export const createDirectoryOrThrow = (directory) => {
    if (fs.existsSync(directory)) {
        throw new Error(
            `Directory ${directory} already exists. Please use a different name or remove the existing directory.`,
        );
    }
    fs.mkdirSync(directory, { recursive: true });
};
