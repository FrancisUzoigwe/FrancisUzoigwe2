import React from 'react';
import download from 'downloadjs';

interface FileDownloaderProps {
    fileUrl: string;
    filename: string;
}

class FileDownloader extends React.Component<FileDownloaderProps> {
    handleDownload = () => {
        const { fileUrl, filename } = this.props;
        download(fileUrl, filename);
    };

    render() {
        return (
            <div>
                <button className='px-6 py-3 rounded-md my-4 bg-black text-white' onClick={this.handleDownload}>Download File</button>
            </div>
        );
    }
}

export default FileDownloader;
