class IncludeManager {
    constructor() {
        this.init();
    }

    forEach(array, callback) {
        const size = array.length;
        for (let i = 0; i < size; i++) {
            callback.apply(array[i], [i]);
        }
    }

    getFilePath() {
        const curWwwPath = window.document.location.href;
        const pathName = window.document.location.pathname;
        const localhostPath = curWwwPath.substring(0, curWwwPath.indexOf(pathName));
        const projectName = pathName.substring(0, pathName.substr(1).lastIndexOf('/') + 1);
        return localhostPath + projectName;
    }

    getFileContent(url) {
        return fetch(url).then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            }
            return response.text();
        });
    }

    parseNode(content) {
        const objE = document.createElement("div");
        objE.innerHTML = content;
        return objE.childNodes;
    }

    executeInlineScripts(content) {
        const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
        let match;
        while ((match = scriptRegex.exec(content))) {
            try {
                eval(match[1]);
            } catch (error) {
                console.error("Error executing script:", error);
            }
        }
    }

    getPrevCount(src) {
        const mac = /\.\.\//g;
        let count = 0;
        while (mac.exec(src)) {
            count++;
        }
        return count;
    }

    getRequestUrl(src) {
        if (/http:\/\//g.test(src)) {
            return src;
        }

        let filePath = this.getFilePath();
        let prevCount = this.getPrevCount(src);

        while (prevCount--) {
            filePath = filePath.substring(0, filePath.substr(1).lastIndexOf('/') + 1);
        }

        return filePath + "/" + src.replace(/\.\.\//g, "");
    }

    async replaceIncludeElements() {
        const includeTags = document.getElementsByTagName("include");
        const tasks = Array.from(includeTags).map(async (tag) => {
            const src = tag.getAttribute("src");
            if (!src) {
                console.warn("No src attribute found for include tag:", tag);
                return;
            }

            try {
                const content = await this.getFileContent(this.getRequestUrl(src));
                const parent = tag.parentNode;
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = content;

                while (tempDiv.firstChild) {
                    parent.insertBefore(tempDiv.firstChild, tag);
                }

                this.executeInlineScripts(content);
                parent.removeChild(tag);
            } catch (error) {
                console.error(`Error including ${src}:`, error);
            }
        });

        await Promise.all(tasks);
    }

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.replaceIncludeElements();
        });
    }
}

// Initialize the IncludeManager
new IncludeManager();
